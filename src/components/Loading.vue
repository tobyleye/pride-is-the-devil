<template>
  <div class="loading">
    <div class="loading__ring" />
    <p class="loading__text">Loading...</p>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  &__ring {
    height: 40px;
    width: 40px;
    margin: auto;
    border-radius: 100%;
    border: 2px solid #f3f3f3;
    border-top-color: var(--primary-color);
    margin-bottom: 4px;
    animation: spin 1s linear infinite;
  }
  &__text {
    font-size: 18px;
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
