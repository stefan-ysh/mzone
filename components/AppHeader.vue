<template>
  <div class="navbar bg-base-100">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <svg @click="changeTheme" style="width: 50px;cursor: pointer;" v-if="theme === 'light'" width="80" height="80"
        viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M36.4734 29.146C38.7655 28.4012 41.2346 28.4012 43.5268 29.146C45.819 29.8907 47.8165 31.342 49.2331 33.2919C50.6498 35.2417 51.4128 37.59 51.4128 40.0001C51.4128 42.4102 50.6498 44.7585 49.2331 46.7083C47.8165 48.6581 45.819 50.1094 43.5268 50.8542C41.2346 51.599 38.7655 51.599 36.4734 50.8542C34.1812 50.1094 32.1837 48.6581 30.767 46.7083C29.3504 44.7585 28.5874 42.4102 28.5874 40.0001C28.5874 37.59 29.3504 35.2417 30.767 33.2919C32.1837 31.342 34.1812 29.8907 36.4734 29.146Z"
          stroke="#C2CCDE" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M40.0001 14L40.025 22.0079L40.0006 22L39.9751 22.0083L40.0001 14Z" stroke="#C2CCDE"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M29.445 25.4297L24.7176 18.9656L29.4047 25.4593L29.4204 25.4377L29.445 25.4297Z" stroke="#C2CCDE"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22.8969 34.4166L15.2726 31.9656L22.8815 34.4641V34.4377L22.8969 34.4166Z" stroke="#C2CCDE"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22.8815 45.5359L15.2726 48.0344L22.8969 45.5834L22.8816 45.5623L22.8815 45.5359Z" stroke="#C2CCDE"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M29.4047 54.5407L24.7176 61.0344L29.445 54.5703L29.4205 54.5623L29.4047 54.5407Z" stroke="#C2CCDE"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M39.9751 57.9917L40.0001 66L40.025 57.9921L40.0006 58L39.9751 57.9917Z" stroke="#C2CCDE"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M50.5553 54.5706L55.2825 61.0344L50.5959 54.5414L50.5807 54.5623L50.5553 54.5706Z" stroke="#C2CCDE"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M57.1041 45.5837L64.7275 48.0344L57.1196 45.5362V45.5623L57.1041 45.5837Z" stroke="#C2CCDE"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M57.1196 34.4377L57.1196 34.4638L64.7275 31.9656L57.1041 34.4163L57.1196 34.4377Z" stroke="#C2CCDE"
          stroke-linecap="round" stroke-linejoin="round" />
        <path d="M50.5959 25.4586L55.2825 18.9656L50.5553 25.4294L50.5807 25.4377L50.5959 25.4586Z" stroke="#C2CCDE"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <svg @click="changeTheme" style="width: 50px;cursor: pointer;" v-else width="80" height="80" viewBox="0 0 80 80"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M49.8987 16.1007C43.5601 13.4752 36.4382 13.4752 30.0997 16.1007C23.7611 18.7262 18.7252 23.7622 16.0997 30.1007C13.4742 36.4393 13.4742 43.5612 16.0997 49.8997C18.7252 56.2383 23.7611 61.2742 30.0997 63.8997C36.4382 66.5252 43.5601 66.5252 49.8987 63.8997C50.1666 63.7887 50.4322 63.6735 50.6954 63.5539C52.4693 62.7484 51.7084 60.1519 49.8243 59.6557C48.9428 59.4236 48.0732 59.1312 47.2215 58.7784C42.2412 56.7155 38.2844 52.7587 36.2215 47.7784C34.1586 42.7981 34.1586 37.2024 36.2215 32.2221C38.2844 27.2418 42.2412 23.285 47.2215 21.2221C48.0732 20.8693 48.9429 20.5769 49.8244 20.3447C51.7084 19.8486 52.4694 17.2521 50.6955 16.4465C50.4322 16.327 50.1666 16.2117 49.8987 16.1007Z"
          stroke="#C2CCDE" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const theme = ref('light')

const changeTheme = (event) => {
  const html = document.querySelector('html')
  const _t = theme.value === 'dark' ? 'light' : 'dark'
  // 检查当前浏览器是否支持transition
  const isAppearanceTransition =
    // @ts-expect-error: Transition API
    document.startViewTransition &&
    !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
  // 如果不支持,则直接更改主题
  if (!isAppearanceTransition) {
    theme.value = _t
    html.setAttribute('data-theme', _t)
    localStorage.setItem(
      "theme",
      _t
    );
    return;
  }
  // 如果支持,则执行更换主题的动画
  const x = event.x
  const y = event.y
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(() => {
    // html 元素切换 dark类名，以此达到更换主题色的目的
    theme.value = _t
    html.setAttribute('data-theme', _t)
    localStorage.setItem(
      "theme",
      _t
    );
  });
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];
    const c = theme.value === 'light' ? clipPath : [...clipPath].reverse()
    const pseudoElement = theme.value === 'light'
      ? "::view-transition-new(root)"
      : "::view-transition-old(root)"
    document.documentElement.animate(
      {
        clipPath: c,
      },
      {
        duration: 300,
        easing: "ease-in",
        pseudoElement
      }
    );
  });
};
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    document.querySelector('html').setAttribute('data-theme', savedTheme)
    theme.value = savedTheme
  } else {
    theme.value = 'light'
    localStorage.setItem(
      "theme",
      theme.value
    );
    document.querySelector('html').setAttribute('data-theme', theme.value)
  }
})
</script>
<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

.dark::view-transition-old(root) {
  z-index: 9999;
}

.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 9999;
}
</style>
