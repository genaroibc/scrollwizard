import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <main class="h-screen grid place-content-center text-white">
        <header class="text-center my-4 flex flex-col gap-2">
          <h1 class="text-2xl font-bold">Scrollbar Wizard</h1>
          <h2 class="text-xl">Create your custom scrollbar with ease</h2>
        </header>

        <Slot />
      </main>
    </>
  );
});
