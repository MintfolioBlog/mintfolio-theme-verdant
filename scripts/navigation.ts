/** Keep navigation global; await list restoration before Astro restores scroll. */
document.addEventListener('astro:before-preparation', (event) => {
  window.scrollTo({ left: window.scrollX, top: window.scrollY, behavior: 'instant' });
  if (event.navigationType !== 'traverse') return;
  const loader = event.loader;
  event.loader = async () => {
    await loader();
    if (event.signal.aborted || event.defaultPrevented || !event.newDocument.getElementById('posts-list')) return;
    const { restoreListDocument } = await import('./postList');
    if (!event.signal.aborted) restoreListDocument(event.newDocument, event.to);
  };
});
document.addEventListener('astro:before-swap', (event) => {
  if (event.navigationType === 'traverse') event.newDocument.documentElement.dataset.restoringScroll = 'true';
  const hero = event.newDocument.querySelector<HTMLElement>('#hero');
  if (hero && event.to.hash === '#content') {
    hero.classList.add('collapsed');
    hero.inert = true;
    event.newDocument.querySelector('.content-wrapper')?.classList.add('hero-collapsed');
  }
});
document.addEventListener('astro:page-load', () => { delete document.documentElement.dataset.restoringScroll; });
