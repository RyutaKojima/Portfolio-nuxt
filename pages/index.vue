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

      <template>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="/works/thumb/simpleGestures.png"
            alt="simpleGestures"
            height="200px"
          ></v-img>

          <v-card-title>
            simpleGestures
          </v-card-title>

          <v-card-text>
            <div>JavaScript / Chrome extension</div>
            マウスジェスチャ機能を提供するためのGoogle Chrome拡張機能です。
            軽量/簡単な設定・操作を目指しています。
          </v-card-text>

          <v-card-actions>
            <v-btn text>
              <a
                href="https://chrome.google.com/webstore/detail/flfminafiamnggnldfpilnfnmbgmiegn"
                target="_blank"
                >App link</a
              >
            </v-btn>

            <v-btn color="purple" text>
              <a
                href="https://github.com/RyutaKojima/simpleGestures"
                target="_blank"
                >GitHub</a
              >
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="showCardDetail = !showCardDetail">
              <v-icon>{{
                showCardDetail ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showCardDetail">
              <v-divider></v-divider>

              <v-card-text>
                Google Chromeでマウスジェスチャを行うための拡張機能です。
                軽量/簡単な設定・操作を目指しています。
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
      showCardDetail: false,
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
      ]
    }
  }
}
</script>
