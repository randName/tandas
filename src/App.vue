<template>
<v-app :dark="dark">
  <v-toolbar app>
    <v-toolbar-title class="headline">
      <span>Tandas</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-chip>
      <v-avatar>
        <v-icon v-text="status.icon" :color="status.color"></v-icon>
      </v-avatar>
      {{ status.text }}
    </v-chip>
  </v-toolbar>
  <v-content>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title class="headline">Quick Actions</v-card-title>
            <v-card-actions>
              <v-btn fab small @click="dark = !dark">
                <v-icon>brightness_4</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog">
                <v-btn fab small slot="activator" color="primary">
                  <v-icon>directions_run</v-icon>
                </v-btn>
                <v-card>
                  <v-card-title class="headline">Queue for toilet</v-card-title>
                  <v-card-text>
                    <v-btn block large color="primary" disabled>
                      {{ request.text }}
                    </v-btn>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = false">Cancel</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header" class="headline">Recent</div>
              <v-list>
                <template v-for="(item, i) in recent">
                <v-list-tile :key="item.ts">
                  <v-chip>
                    <v-avatar><v-icon>schedule</v-icon></v-avatar>
                    {{ showTime(item.start) }}
                  </v-chip>
                  <v-chip v-if="item.end">
                    <v-avatar><v-icon>timer</v-icon></v-avatar>
                    {{ item.duration }} min
                  </v-chip>
                  <v-list-tile-content></v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn v-if="item.end" icon disabled>
                      <v-icon>done</v-icon>
                    </v-btn>
                    <v-progress-circular v-else indeterminate size=24></v-progress-circular>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="i < recent.length - 1" :key="i" ></v-divider>
                </template>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
import firestore from '@/plugins/firebase'

export default {
  data () {
    return {
      dark: true,
      activity: [],
      dialog: false,
      maintenance: null,
      request: {
        wait: false,
        text: 'Coming Soon'
      },
    }
  },
  firestore,
  computed: {
    recent () {
      const duration = null
      return this.activity.map((h) => ({ ...h, ts: h.ts.seconds }))
        .reduce((o, h) => {
          if (o[0].start) {
            if (!h.oc) {
              o[0].end = h.ts
              o[0].duration = Math.round((h.ts - o[0].start) / 6, 1) / 10
              o.unshift({ duration })
            }
          } else if (h.oc) {
            o[0].start = h.ts
          }
          return o
        }, [{ duration }]).filter((l) => l.start).slice(0, 5)
    },
    status () {
      const l = this.recent[0]
      const m = this.maintenance ? this.maintenance.v : null

      const used = l ? (!l.end) : null
      const color = m ? 'warning' : (used ? 'error' : 'success')
      const icon = m ? 'offline_bolt' : (l ? (used ? 'remove' : 'check') + '_circle' : 'sync')
      const text = m ? 'Maintenance' : (l ? 'Since ' + this.showTime(l.end || l.start) : 'Getting status ...')

      return {
        used,
        text,
        icon,
        color,
      }
    }
  },
  methods: {
    use () {
      const u = this.status.used
      this.request.wait = true
      this.request.text = u ? 'Start' : 'End'
      this.$firestoreRefs.door.add({
        ts: new Date(),
        oc: !u
      }).then(() => {
        this.request.wait = false
        if (u) { this.dialog = false }
      })
    },
    showTime (time) {
      const ts = new Date(time * 1000)
      const t = ['Hours', 'Minutes'].map((f) => ts['get' + f]())
      return t.map((n) => (n > 9 ? '' : '0') + n).join(':')
    }
  }
}
</script>
