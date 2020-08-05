<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline">
          プロフィール
        </v-card-title>
        <v-card-text>
          <p>{{ profile.lastName }}{{ profile.firstName }}</p>
          <p>
            年齢: xx
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline">
          Skills
        </v-card-title>
        <v-card-text>
          <template v-for="skill in skills">
            <v-chip :key="skill.name" class="ma-2" :color="skill.color">
              <v-icon left>{{ skill.icon }}</v-icon>
              {{ skill.name }}
              <v-avatar right :color="skill.color" class="darken-4">
                {{ skill.yearsOfUse }}
              </v-avatar>
            </v-chip>
          </template>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline">
          職務経歴
        </v-card-title>
        <v-card>
          <v-card-title>
            セイルボート
          </v-card-title>
          <v-card-subtitle>
            2015-09～現在
          </v-card-subtitle>
          <v-card-text>
            <div>
              不動産賃貸業務の業者間流通システム「キマRoom!」の追加機能開発・運用
              電子申込顧客管理ツール「 キマRoom! Sign 」の新規開発・運用
            </div>
            <div>
              前職で経験のなかった複数人でのチーム開発を経験しました。
              フレームワークの利用も初めてであり、フレームワークの便利さやコーディング規約なども意識するようになりました。
              前職では時間の限られた中手探りで勉強していたため、Webサービス構築の基本的な知識もここで身についたと思います。
              チーム開発を通して、読みやすさやコードの意図を明確にすることを意識するようになりました。
            </div>
            <div>
              PHP5.6 / HTML5 / JavaScript(ES5) / css / FuelPHP / jQuery /
              Bootstrap / MySQL5.6 / memcached / Git / GitHub / Chatwork / Slack
              / AWS(EC2/S3/RDB) / composer
            </div>
          </v-card-text>
        </v-card>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline">
          個人開発
        </v-card-title>

        <v-row class="d-flex flex-row">
          <v-card
            v-for="personalWork in personalWorks"
            :key="personalWork.title"
            class="mx-auto"
            color="brown darken-3"
            max-width="344"
          >
            <v-img
              :src="personalWork.imageUrl"
              :alt="personalWork.title"
              height="200px"
              bor
            ></v-img>

            <v-card-title>
              <v-avatar v-if="personalWork.iconUrl" color="black" size="36">
                <v-img :src="personalWork.iconUrl"></v-img>
              </v-avatar>

              {{ personalWork.title }}
            </v-card-title>

            <v-card-text>
              <div>
                {{ personalWork.usingSkills.join('/') }}
              </div>
              <div>{{ personalWork.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn v-if="personalWork.links.app" text>
                <a :href="personalWork.links.app" target="_blank">App link</a>
              </v-btn>

              <v-btn v-if="personalWork.links.github" color="purple" text>
                <a :href="personalWork.links.github" target="_blank">GitHub</a>
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                v-if="personalWork.expansionDetail"
                icon
                @click="personalWork.showDetail = !personalWork.showDetail"
              >
                <v-icon
                  >{{
                    personalWork.showDetail
                      ? 'mdi-chevron-up'
                      : 'mdi-chevron-down'
                  }}
                </v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition v-if="personalWork.expansionDetail">
              <div v-show="personalWork.showDetail">
                <v-divider></v-divider>

                <v-card-text>
                  {{ personalWork.expansionDetail }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-row>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card>
        <v-card-title class="headline">
          コンタクト
        </v-card-title>
        <v-card-text>
          <template v-for="contact in contacts">
            <p :key="contact.name">
              {{ contact.name }}:
              <a :href="contact.url">{{ contact.account }}</a>
            </p>
          </template>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import fetchEntries from '@/modules/apis'

export default {
  components: {},
  data() {
    return {
      profile: {
        firstName: '竜太',
        lastName: '小島',
        birthDate: '1988-02-13'
      },
      contacts: [
        {
          name: 'GitHub',
          account: 'RyutaKojima',
          url: 'https://github.com/RyutaKojima'
        },
        {
          name: 'Twitter',
          account: '@kjm0213',
          url: 'https://twitter.com/kjm0213'
        },
        {
          name: 'email',
          account: 'rkojima0213@gmail.com',
          url: 'mailto:rkojima0213@gmail.com'
        }
      ],
      skills: [],
      personalWorks: [
        {
          title: 'simpleGestures',
          iconUrl: '/works/icons/simpleGestures.png',
          imageUrl: '/works/thumbs/simpleGestures.png',
          usingSkills: ['JavaScript', 'Chrome extension'],
          description:
            'マウスジェスチャ機能を提供するためのGoogle Chrome拡張機能です。\n' +
            '軽量/簡単な設定・操作を目指しています。',
          showDetail: false,
          expansionDetail:
            'Chrome Web Storeに公開しており、7,000人のユーザーに利用いただいています。',
          links: {
            app:
              'https://chrome.google.com/webstore/detail/flfminafiamnggnldfpilnfnmbgmiegn',
            github: 'https://github.com/RyutaKojima/simpleGestures'
          }
        },
        {
          title: 'MySQLSchemaDoc',
          iconUrl: '',
          imageUrl: '/works/thumbs/MySQLSchemaDoc.png',
          usingSkills: ['MySQL', 'xsltproc', 'JavaScript', 'css'],
          description:
            'MySQLのDDLからテーブル定義書を作成するためのツールです。',
          showDetail: false,
          expansionDetail: '',
          links: {
            app: 'https://ryutakojima.github.io/MySQLSchemaDoc/',
            github: 'https://github.com/RyutaKojima/MySQLSchemaDoc'
          }
        }
      ]
    }
  },
  created() {
    this.fetchSkills()
  },
  methods: {
    async fetchSkills() {
      const data = await fetchEntries()

      const skills = data.items.map((value) => {
        return {
          name: value.fields.name,
          icon: value.fields.icon,
          color: value.fields.color,
          yearsOfUse: value.fields.yearsOfUse
        }
      })
      this.skills = skills
    }
  }
}
</script>
