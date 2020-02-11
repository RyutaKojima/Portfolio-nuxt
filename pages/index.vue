<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
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
    </v-flex>
    <v-flex xs12 sm8 md6>
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
    </v-flex>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          職務経歴
        </v-card-title>
        <v-card-text>
          なんかいろいろ
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          個人開発(Personal Works)
        </v-card-title>
        <v-card-text>
          なんかいろいろ
        </v-card-text>
      </v-card>

      <template v-for="personalWork in personalWorks">
        <v-card :key="personalWork.title" class="mx-auto" max-width="344">
          <v-img
            :src="personalWork.imageUrl"
            :alt="personalWork.title"
            height="200px"
          ></v-img>

          <v-card-title>
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
              icon
              @click="personalWork.showDetail = !personalWork.showDetail"
            >
              <v-icon>{{
                personalWork.showDetail ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="personalWork.showDetail">
              <v-divider></v-divider>

              <v-card-text>
                {{ personalWork.expansionDetail }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </template>
    </v-flex>

    <v-flex xs12 sm8 md6>
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
    </v-flex>
  </v-layout>
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
          account: '',
          url: ''
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
          imageUrl: '/works/thumb/simpleGestures.png',
          description:
            '<div>JavaScript / Chrome extension</div>\n' +
            'マウスジェスチャ機能を提供するためのGoogle Chrome拡張機能です。\n' +
            '軽量/簡単な設定・操作を目指しています。',
          showDetail: false,
          expansionDetail:
            'Google Chromeでマウスジェスチャを行うための拡張機能です。\n' +
            '軽量/簡単な設定・操作を目指しています。',
          links: {
            app:
              'https://chrome.google.com/webstore/detail/flfminafiamnggnldfpilnfnmbgmiegn',
            github: 'https://github.com/RyutaKojima/simpleGestures'
          }
        }
      ]
    }
  }
}
</script>
