<template>
    <div class="guide_wrap">
        <section>
            <h2>Setting
                <ul>
                    <li><a href="/with/setting/vue2/">Vue2</a></li>
                    <li><a href="/with/setting/vue3/">Vue3</a></li>
                </ul>
            </h2>
            <ul class="explain">
                <li><strong>Node.js</strong> : <a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a></li>
                <li><strong>Vue CLI</strong> : npm install @vue/cli -g (Vue로 프로젝트를 생성할때 필요한 구성등 세팅 자동으로 해주는 역할)</li>
                <li><strong>Vue Router</strong> : npm install vue-router --save (프로젝트 폴더에서 진행)<br/> 버전에 따른 router 설치 : npm install -S vue-router@버전</li>
                <li><strong>Axios</strong> : npm install axios (데이터 호출 역할 - 프로젝트 폴더에서 진행)</li>
                <li><strong>Vetur</strong> : .vue 파일의 코드 하이라이팅 [VSCode 확장프로그램(Extensions)에서 설치]</li>
                <li><strong>Vue VSCode Snippets</strong> : .vue 파일 초기 구성 생성 : 새로 생성한 페이지에서 'vbase' 입력 시 타입별 리스트가 나오는데, 여기서 선택하면 해당 타입의 기본세팅이 자동으로 됨 [VSCode 확장프로그램(Extensions)에서 설치]</li>
            </ul>
        </section>
        <section>
            <h2>프로젝트 생성</h2>
            <ul class="explain">
                <li>VSCode 터미널에서 vue create 프로젝트명 입력 (프로젝트 만들때 에러가 나면 하단 설정방법 참고) - 프로젝트명에 대문자 넣으면 안됨</li>
                <li>?Please pick a preset이 나오면 키보드 방향키로 preset선택할 수 있음(아무생각없이 Default로 하자.)<br/> : [EPERM: operation not permitted, mkdir] 에러가 발생하면, 폴더 권한을 수정해주자.</li>
                <li>완료되면 설치한 위치에 프로젝트명 폴더가 생성됨.</li>
            </ul>
        </section>
        <router-view></router-view>
    </div>
</template>

<script></script>

<style></style>