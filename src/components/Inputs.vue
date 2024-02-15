<template>
    <label v-if="_type == 'checkbox' || _type == 'radio'" :class="{'check': !isswitch, 'check_ani': isswitch}">
        <input :type="_type" :id="_id" :name="_name" />
        <em class="label">{{_text}}</em>
    </label>
    <div v-else class="label_wrap">
        <label class="input" :class="{'err':isError}">
            <i v-if="_placeholder && !isDisabled">{{_placeholder}}</i>
            <input :type="_type" :id="_id" :value="_value" @focus="hidePlaceholder" @blur="valueChk" @keyup="input_btn_chk" :readonly="isReadonly" :disabled="isDisabled" />
            <em class="err_txt">{{err_text}}</em>
            <button class="icon_del" v-if="_type != 'password'" @click="input_btn_fn">Delete</button>
            <button class="icon_pass" v-if="_type == 'password'" @click="input_btn_fn">password</button>
        </label>
    </div>
</template>

<script>
export default {
    name: 'Inputs',
    props: {
        _id: String, //input ID
        _name: String, // Input NAME
        _type: String, // Input TYPE
        _text: String, // checkbox, radio 문구
        _placeholder: String, // Input PLACEHOLDER
        _value: null, // Input VALUE
        _err_text: String, // 오류 시 노출 문구
        isError: false, // 오류 여부
        isReadonly: false, // readonly 여부
        isDisabled:false, // disabled 여부
        isswitch: false, // checkbox switch 형태
        isRrequired: false, // 필수값 여부
    },
    methods:{
        hidePlaceholder(e){ //focus시 placeholder 숨김
            e.currentTarget.previousSibling.style.display="none"
        },
        valueChk(e){ //blur 시 value 유무 확인하여 placeholder 조절
            console.log(e.currentTarget.value.length);
            if(e.currentTarget.value.length > 0){
                e.currentTarget.previousSibling.style.display='none';
            } else {
                e.currentTarget.previousSibling.style.removeProperty('display');
            }
        },
        input_btn_chk(e){ //keypress 시 value 유무 확인하여 버튼 노출 조절
            var icon_button = e.currentTarget.closest('.label_wrap').querySelector('button');
            if(e.currentTarget.value.length > 0){
                icon_button.style.cssText="display:block;"
            }else{
                icon_button.style.cssText="display:none;"
            }
        },
        input_btn_fn(e){ //label_wrap의 버튼 클릭 시 각 기능
            var icon_button = e.currentTarget.closest('.label_wrap').querySelector('button');
            if(icon_button.getAttribute('class') == 'icon_del'){ //value 삭제
                e.currentTarget.closest('.label_wrap').querySelector('input').value = null;
                icon_button.style.cssText="display:none;"
                e.currentTarget.closest('.label_wrap').querySelector('i').style.display='block';
            } else if(icon_button.getAttribute('class') == 'icon_pass') { //비밀번호 보기
                e.currentTarget.closest('.label_wrap').querySelector('input').setAttribute('type','text');
                icon_button.setAttribute('class', 'icon_text');
            } else { //비밀번호 숨기기
                e.currentTarget.closest('.label_wrap').querySelector('input').setAttribute('type','password');
                icon_button.setAttribute('class', 'icon_pass');
            }
        }
    }
}
</script>
<style scoped>
em {font-style:normal;}
.check {min-height:20px; padding-left:26px; line-height:1; position:relative; display:inline-block;}
.check > * {line-height:1.4; vertical-align:middle; display:inline-block;}
.check input {margin:0 0 0 1px; position:absolute;}
.check .label:before, .check .label:after {content:''; position:absolute; display:inline-block;}

/* radio */
.check input[type='radio'], .check input[type='checkbox'] {opacity:0;}
.check input[type='radio'], .check input[type='radio'] + .label:before {width:20px; height:20px; background-color:#fff; border:1px solid #ccc; border-radius:50%; box-sizing:border-box; top:3px; left:0;}
.check input[type='radio']:checked + .label:after {width:14px; height:14px; background-color:#333; border-radius:50%; box-sizing:border-box; top:6px; left:3px;}

/* checkbox */
.check input[type='checkbox'], .check input[type='checkbox'] + .label:before {width:20px; height:20px; background-color:#fff; border:1px solid #ccc; box-sizing:border-box; top:0; left:0;}
.check input[type='checkbox']:checked + .label:after {width:6px; height:10px; border:3px solid #333; border-top:0; border-left:0; top:1px; left:6px; -webkit-transform:rotate(45deg); transform:rotate(45deg);}

.check_ani {position:relative; display:inline-block;}
.check_ani input {margin:0 0 0 1px; position:absolute; opacity:0;}
.check_ani input[type='checkbox'] {opacity:0;}
.check_ani .label {min-height:22px; padding-left:48px; position:relative; display:block;}
.check_ani .label:before {width:42px; height:22px; background-color:#ccc; border:0; border-radius:60px; content:''; position:absolute; top:0; left:0; display:inline-block;}
.check_ani input[type='checkbox'] + .label:after {width:18px; height:18px; background-color:#fff; border-radius:50%; content:''; position:absolute; top:50%; left:2px; z-index:1; display:block; transform:translateY(-50%); transition:all 0.2s;}
.check_ani input[type='checkbox']:checked + .label:before {background-color:#ff7200;}
.check_ani input[type='checkbox']:checked + .label:after {left:22px;}

label.input, label.select > div {position:relative; display:block;}
label.input i {color:#aaa; font-size:16px; line-height:18px; position:absolute; top:50%; left:15px; transform:translateY(-50%);}/* placeholder */
label.input input[type='text'], label.input input[type='password'], label.input input[type='number'] {width:100%; font-size:16px; font-family:'MyLotte'; line-height:18px;}
label.input .err_txt {margin-top:5px; color:#ff7200; font-size:12px; font-family:'Noto Sans'; line-height:18px; display:none;}
label.input.err .err_txt {display:block;}
label.input * {flex:1 auto;}

.label_wrap {position:relative; flex:1;}
.label_wrap button[class*='icon_'] {width:24px; height:24px; font-size:0; background-repeat:no-repeat; border-radius:50%; position:absolute; top:9px; right:15px; z-index:1; display:none;}
.label_wrap button[class*='icon_'] + button[class*='icon_'] {margin-right:34px;}
.label_wrap button[class*='icon_'] {background-image:url('@/assets/images/common/icon_split.png'); background-repeat:no-repeat; background-size:150px auto;}
.label_wrap button.icon_del {background-position:0 0;}
.label_wrap button.icon_pass {background-position:-80px 0;}
.label_wrap button.icon_text {background-position:-40px 0;}
</style>
