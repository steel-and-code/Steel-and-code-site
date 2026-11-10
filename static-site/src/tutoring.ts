function getContactHref(value: string | undefined): string | undefined {
  if (!value?.trim()) return;

  const url = URL.canParse(value.trim()) ? new URL(value.trim()) : undefined;
  if (
    (url?.protocol === 'https:' && !url.username && !url.password) ||
    (url?.protocol === 'mailto:' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(url.pathname))
  ) {
    return url.href;
  }

  throw new Error('TUTORING_CONTACT_URL must be an HTTPS contact link or a mailto address.');
}

const defaultContactHref = 'mailto:rodger.roberts.jr@pm.me?subject=Python%20tutoring%20inquiry';
export const tutoringContactHref = getContactHref(
  import.meta.env.TUTORING_CONTACT_URL ?? defaultContactHref,
);
export const tutoringEmailAddress = tutoringContactHref?.startsWith('mailto:')
  ? new URL(tutoringContactHref).pathname
  : undefined;
