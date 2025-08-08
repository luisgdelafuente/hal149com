import type { getEntryBySlug } from 'astro:content';
import type { CollectionKey } from 'astro:content';
import { getCollection } from 'astro:content';
import { getLangFromUrl, useTranslations } from './ui';

export async function getEntry(
  collection: CollectionKey,
  id: string,
  lang: string
) {
  const entries = await getCollection(collection, { id });
  const entry = entries.find(entry => entry.id === `${id}.${lang}`);
  return entry;
}

export async function getCollection(
  collection: CollectionKey,
  lang: string
) {
  const entries = await getCollection(collection);
  return entries.filter(entry => entry.id.endsWith(`.${lang}`));
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}

export function useTranslations(lang: string) {
  return function t(key: string) {
    const translations = {
      en: {
        'nav.services': 'Services',
        'nav.case-studies': 'Case studies',
        'nav.pricing': 'Pricing',
        'nav.faq': 'FAQ',
        'nav.newsletter': 'Newsletter',
        'nav.credits': 'Credits',
        'hero.title': 'blackspike astro landing page',
        'hero.content': '<p><strong>A free Astro landing theme made with Tailwind</strong> to help kick start your Astro website.</p><p>Uses modern CSS and HTML features for added zip, plus a slick swiper carousel. All in Astro JSX.</p>',
        'hero.cta': 'Book a call',
        'services.title': 'Our services',
        'clients.title': 'Trusted by some great companies',
        'testimonials.title': 'Clients ♥ us',
        'case-studies.title': 'Case studies',
        'pricing.title': 'We do design retainers',
        'faq.title': 'Frequently Asked Questions',
        'quote.content': 'This <strong>design agency</strong> is a <strong>game changer</strong>. Its <strong>creative vision</strong>, <strong>user-focused approach</strong>, and <strong>seamless collaboration</strong> have <strong>transformed</strong> the way we <strong>build our brand</strong>. It\'s <strong>not just an agency</strong> — it\'s a <strong>powerful partner</strong> that <strong>delivers real results</strong>.',
        'quote.cite': 'Sean Higgins',
        'quote.role': 'CTO, Interia',
        'demo.title': 'Need design?',
        'demo.content': '<strong>Get a guided tour through our services</strong>, and find out how you and your team can change the way you work, forever.',
        'demo.cta': 'Book a call',
        'form.name.placeholder': 'Your name',
        'form.company.placeholder': 'Your company',
        'form.email.placeholder': 'Your email',
        'form.submit': 'Submit',
        'newsletter.title': 'Stay in the loop',
        'newsletter.content': 'Get the latest updates on our services and industry insights.',
        'newsletter.cta': 'Subscribe',
        'newsletter.name.placeholder': 'Your name',
        'newsletter.email.placeholder': 'Your email',
        'footer.copyright': '© 2024 BlackSpike. All rights reserved.',
        'footer.credits': 'Based on the BlackSpike Astro Landing Page theme.',
        'skip.content': 'Skip to content',
        'close': 'Close',
      },
      es: {
        'nav.services': 'Servicios',
        'nav.case-studies': 'Casos de estudio',
        'nav.pricing': 'Precios',
        'nav.faq': 'Preguntas frecuentes',
        'nav.newsletter': 'Boletín',
        'nav.credits': 'Créditos',
        'hero.title': 'blackspike página de aterrizaje astro',
        'hero.content': '<p><strong>Un tema gratuito de Astro landing hecho con Tailwind</strong> para ayudar a iniciar tu sitio web Astro.</p><p>Usa características modernas de CSS y HTML para mayor velocidad, además de un elegante carrusel swiper. Todo en Astro JSX.</p>',
        'hero.cta': 'Reservar llamada',
        'services.title': 'Nuestros servicios',
        'clients.title': 'Confiado por grandes empresas',
        'testimonials.title': 'Los clientes ♥ nos aman',
        'case-studies.title': 'Casos de estudio',
        'pricing.title': 'Hacemos retención de diseño',
        'faq.title': 'Preguntas Frecuentes',
        'quote.content': 'Esta <strong>agencia de diseño</strong> es un <strong>cambio de juego</strong>. Su <strong>visión creativa</strong>, <strong>enfoque centrado en el usuario</strong>, y <strong>colaboración fluida</strong> han <strong>transformado</strong> la forma en que <strong>construimos nuestra marca</strong>. No es <strong>solo una agencia</strong> — es un <strong>poderoso socio</strong> que <strong>entrega resultados reales</strong>.',
        'quote.cite': 'Sean Higgins',
        'quote.role': 'CTO, Interia',
        'demo.title': '¿Necesitas diseño?',
        'demo.content': '<strong>Obtén un recorrido guiado por nuestros servicios</strong>, y descubre cómo tú y tu equipo pueden cambiar la forma en que trabajan, para siempre.',
        'demo.cta': 'Reservar llamada',
        'form.name.placeholder': 'Tu nombre',
        'form.company.placeholder': 'Tu empresa',
        'form.email.placeholder': 'Tu email',
        'form.submit': 'Enviar',
        'newsletter.title': 'Mantente informado',
        'newsletter.content': 'Obtén las últimas actualizaciones sobre nuestros servicios e información del sector.',
        'newsletter.cta': 'Suscribirse',
        'newsletter.name.placeholder': 'Tu nombre',
        'newsletter.email.placeholder': 'Tu email',
        'footer.copyright': '© 2024 BlackSpike. Todos los derechos reservados.',
        'footer.credits': 'Basado en el tema BlackSpike Astro Landing Page.',
        'skip.content': 'Saltar al contenido',
        'close': 'Cerrar',
      },
    };
    
    return translations[lang as keyof typeof translations]?.[key] || translations.en[key] || key;
  }
}

export function createHref(lang: string, path: string) {
  if (lang === 'en') return path;
  return `/${lang}${path}`;
}
