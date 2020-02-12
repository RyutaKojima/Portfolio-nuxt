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
              <v-icon left>mdi-fire</v-icon>
              {{ skill.name }}
              <v-avatar right class="indigo darken-4">
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
        <v-card-text>
          なんかいろいろ
        </v-card-text>
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
              <span v-html="personalWork.description"></span>
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
                <v-icon>{{
                  personalWork.showDetail
                    ? 'mdi-chevron-up'
                    : 'mdi-chevron-down'
                }}</v-icon>
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
      skills: [
        {
          color: 'indigo',
          name: 'PHP',
          yearsOfUse: 5
        },
        {
          color: 'green',
          name: 'Vue',
          yearsOfUse: 1
        }
      ],
      personalWorks: [
        {
          title: 'simpleGestures',
          iconUrl: '/works/icons/simpleGestures.png',
          imageUrl: '/works/thumbs/simpleGestures.png',
          description:
            '<div>JavaScript / Chrome extension</div>\n' +
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
          description:
            '<div>MySQL / xsltproc / JavaScript / css</div>\n' +
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
  }
}
</script>
