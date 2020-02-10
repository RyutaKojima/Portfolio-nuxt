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
    </v-flex>

    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          コンタクト
        </v-card-title>
        <v-card-text>
          <p>Twitter: {{ contact.twitter }}</p>
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
      contact: {
        github: '',
        twitter: '@kjm0213',
        email: ''
      },
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
