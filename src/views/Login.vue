<template>
  <v-layout d-flex justify-center align-center>
    <v-flex xl3 md4 sm6>
      <form class="form-auth mx-auto">
        <v-card dark style="background: rgba(0, 0, 0, 0.8);">
          <div class="px-4 pt-3 pb-2">
            <p class="subheading text-xs-center">Информационно-аналитическая система мониторинга и контроля в сфере закупок лекарственных препаратов</p>
            <v-divider dark class="mt-4 mb-3"></v-divider>
            <v-text-field
                    v-validate="'required'"
                    v-model="login"
                    :error-messages="errors.collect('login')"
                    label="Логин"
                    data-vv-name="login"
                    required
            ></v-text-field>
            <v-text-field
                    v-validate="'required'"
                    v-model="password"
                    :error-messages="errors.collect('password')"
                    label="Пароль"
                    data-vv-name="password"
                    required
            ></v-text-field>
          </div>
          <v-divider></v-divider>
          <div class="px-4 py-3">
            <v-btn @click="submit" block color="primary" large>Авторизоваться</v-btn>
            <v-btn @click="clear" class="mt-4" block color="primary" large>Вход через ЕСИА</v-btn>
          </div>
        </v-card>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
        $_veeValidate: {
            validator: 'new'
        },
        data: () => ({
            login: '',
            password: '',
            dictionary: {
                custom: {
                    login: {
                        required: () => 'Поле логин не может быть пустым'
                    },
                    password: {
                        required: () => 'Поле пароль не может быть пустым'
                    }
                }
            }
        }),
        mounted () {
            this.$validator.localize('ru', this.dictionary)
            document.body.classList.add('page-login')
        },
        destroyed() {
            document.body.classList.remove('page-login')
        },
        methods: {
            submit () {
                this.$validator.validateAll()
            },
            clear () {
                this.login = ''
                this.password = ''
                this.$validator.reset()
            }
        }
    }
</script>

<style lang="scss">
  .page-login {
    main.content {
      padding: 0!important;
      &::before, &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
      }
      &::before {
        background: #fff;
        z-index: 1;
      }
      &::after {
        background: rgba(0,0,0,.1);
        z-index: 2;
      }
    }
    nav.toolbar {
      opacity: 0;
    }
  }
  .form-auth {
    position: relative;
    z-index: 5;
    width: 400px;
    max-width: 100%;
    .input-group {
      margin-bottom: 5px;
    }
  }
</style>