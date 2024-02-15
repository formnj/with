<template>
    <div class="guide_wrap">
        <section>
            <h2>Inputs</h2>
            <ul class="toolbar">
                <li><button class="current" @click="tool_select('text');">Text</button></li>
                <li><button @click="tool_select('pw');">Password</button></li>
                <li><button @click="tool_select('check');">Checkbox</button></li>
                <li><button @click="tool_select('radio');">Radio</button></li>
                <li><button @click="tool_select('isswitch');">Switch</button></li>
            </ul>
            <div class="design_box">
                <Inputs :_type="form_opt[0].type" :isswitch="form_opt[0].isswitch" :_placeholder="form_opt[0].Placeholder" _text="Label" />
            </div>
            <div class="code_box">
                <pre><code>&lt;Inputs {{ form_opt[0].opt }} /&gt;</code></pre>
            </div>
        </section>

        <section>
            <h2>Select</h2>
            <div class="design_box">
                
            </div>
        </section>
    </div>
</template>

<script>
import Inputs from '@/components/Inputs'

export default {
    name: 'App',
    components: {
        Inputs
    },
    data(){
        return {
            form_opt: [
                {
                    Placeholder : '문구를 입력해주세요.',
                    type        : 'text', //default type
                    isswitch    : Boolean,
                    opt         : '_type="text" _placeholder="문구를 입력해주세요"'
                }
            ]
        }
    },
    methods: {
        tool_select(props){
            for(var i = 0; i<event.currentTarget.closest('.toolbar').querySelectorAll('button').length; i++){
                event.currentTarget.closest('.toolbar').querySelectorAll('button')[i].classList.remove('current');
            }
            event.currentTarget.classList.add('current');
            switch (props) {
                case 'isswitch':
                    this.form_opt[0].isswitch = true
                    this.form_opt[0].type = 'checkbox',
                    this.form_opt[0].opt = '_type="'+ this.form_opt[0].type +'" :isswitch="'+ this.form_opt[0].isswitch +'" _text="Label"'
                    break;

                case 'pw':
                    this.form_opt[0].isswitch = false
                    this.form_opt[0].type = 'password',
                    this.form_opt[0].Placeholder = '비밀번호를 입력해주세요',
                    this.form_opt[0].opt = '_type="'+ this.form_opt[0].type +'" _placeholder="'+ this.form_opt[0].Placeholder +'"'
                    break;

                case 'check':
                    this.form_opt[0].isswitch = false
                    this.form_opt[0].type = 'checkbox',
                    this.form_opt[0].opt = '_type="'+ this.form_opt[0].type +'" _text="Label"'
                    break;

                case 'radio':
                    this.form_opt[0].isswitch = false
                    this.form_opt[0].type = 'radio',
                    this.form_opt[0].opt = '_type="'+ this.form_opt[0].type +'" _text="Label"'
                    break;

                default:
                    this.form_opt[0].isswitch = false
                    this.form_opt[0].type = 'text',
                    this.form_opt[0].Placeholder = '문구를 입력해주세요',
                    this.form_opt[0].opt = '_type="'+ this.form_opt[0].type +'" _placeholder="'+ this.form_opt[0].Placeholder +'"'
                    break;
            }
        }
    }
}
</script>

<style></style>