<script setup lang="ts">
// Screenshot UI dengan penanda bernomor. Penanda dan keterangan muncul satu per satu sesuai klik.
import { computed } from 'vue';
import { shots } from './shotData';

const props = defineProps<{ id: string; clicks: number }>();
const shot = computed(() => shots[props.id]);
</script>

<template>
    <div class="shot">
        <div class="frame">
            <div class="bar"><i></i><i></i><i></i><span>kinetik.bpssulteng.id</span></div>
            <div class="img">
                <img :src="shot.src" alt="" />
                <span v-for="s in shot.steps" :key="s.n" class="pin" :class="{ on: clicks >= s.n, now: clicks === s.n }" :style="{ left: s.x + '%', top: s.y + '%' }">{{ s.n }}</span>
            </div>
        </div>
        <ol class="notes">
            <li v-for="s in shot.steps" :key="s.n" :class="{ on: clicks >= s.n, now: clicks === s.n }">
                <span class="n">{{ s.n }}</span><span class="t">{{ s.text }}</span>
            </li>
        </ol>
    </div>
</template>

<style scoped>
.shot { display: grid; grid-template-columns: 2.1fr 1fr; gap: 1rem; margin-top: .5rem; align-items: start; }
.frame { border: 1px solid #cfd8e6; border-radius: 12px; overflow: hidden; background: #fff; box-shadow: 0 6px 20px rgb(27 75 140 / .12); }
.bar { display: flex; align-items: center; gap: .3rem; padding: .3rem .6rem; background: #eef2f8; border-bottom: 1px solid #dbe3ef; font-size: .62rem; color: #5b6676; }
.bar i { width: .5rem; height: .5rem; border-radius: 50%; background: #c8d2e2; }
.bar span { margin-left: .5rem; }
.img { position: relative; line-height: 0; }
.img img { width: 100%; display: block; }
.pin { position: absolute; transform: translate(-50%, -50%) scale(0); width: 1.2rem; height: 1.2rem; border-radius: 50%; background: #F28C1B; color: #fff; font: 800 .68rem/1.2rem system-ui, sans-serif; text-align: center; box-shadow: 0 0 0 2px #fff, 0 2px 6px rgb(0 0 0 / .4); transition: transform .45s cubic-bezier(.2, 1.4, .4, 1); }
.pin.on { transform: translate(-50%, -50%) scale(1); }
.pin.now { animation: ping 1.2s ease-out 2; }
@keyframes ping { 0% { box-shadow: 0 0 0 2px #fff, 0 0 0 2px rgb(242 140 27 / .7); } 100% { box-shadow: 0 0 0 2px #fff, 0 0 0 12px rgb(242 140 27 / 0); } }
.notes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .5rem; }
.notes li { display: flex; gap: .55rem; align-items: flex-start; font-size: .82rem; line-height: 1.3; opacity: .18; transform: translateX(8px); transition: opacity .5s, transform .5s; }
.notes li.on { opacity: 1; transform: none; }
.notes li.now .t { background: #FFF3E0; border-radius: 6px; }
.n { flex: none; width: 1.4rem; height: 1.4rem; border-radius: 50%; background: #F28C1B; color: #fff; font-weight: 800; font-size: .75rem; display: inline-flex; align-items: center; justify-content: center; margin-top: .05rem; }
.t { padding: .05rem .3rem; }
@media (prefers-reduced-motion: reduce) { .pin, .notes li { transition-duration: .01ms !important; } .pin.now { animation: none; } }
</style>
