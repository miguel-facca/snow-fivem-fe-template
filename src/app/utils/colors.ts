import { useNuiCallback } from '@app/hooks/useNuiCallback';

export async function getMainColor() {
  const resp = await useNuiCallback('getMainColor', {}, '150,150,150');

  let color = resp;

  if (!resp) {
    color = '0,171,192';
  }

  document.documentElement.style.setProperty('--mainColor', color);
}
