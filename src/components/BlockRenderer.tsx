import { useState } from 'react';
import { Icon } from './Icon';
import { useI18n } from '../i18n';
import type { Block } from '../data/types';

const KEYWORDS = new Set([
  'public', 'private', 'protected', 'static', 'final', 'void', 'class', 'interface',
  'extends', 'implements', 'new', 'return', 'if', 'else', 'for', 'while', 'do',
  'switch', 'case', 'break', 'continue', 'try', 'catch', 'finally', 'throw',
  'throws', 'import', 'package', 'this', 'super', 'abstract', 'enum', 'instanceof',
  'true', 'false', 'null', 'int', 'double', 'float', 'long', 'short', 'byte',
  'char', 'boolean', 'String', 'var',
]);

const TYPES = new Set([
  'Scanner', 'System', 'Integer', 'String', 'Object', 'Item', 'Vase', 'Statue',
  'Painting', 'Menu', 'Chef', 'ArrayList', 'TreeSet', 'HashMap', 'Comparable',
  'Exception', 'Throwable', 'FileReader', 'Car', 'Tester', 'AntiqueShop',
  'ItemList', 'ProductManager', 'Product', 'Book', 'Inputter', 'Person',
]);

function highlight(code: string): string {
  let out = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  out = out.replace(/(\/\/[^\n]*)/g, '<span class="tok-com">$1</span>');
  out = out.replace(/("(?:[^"\\]|\\.)*")/g, '<span class="tok-str">$1</span>');
  out = out.replace(/\b(\d+\.?\d*)\b/g, '<span class="tok-num">$1</span>');
  out = out.replace(/\b([A-Za-z_]\w*)\b/g, (m) => {
    if (KEYWORDS.has(m)) return `<span class="tok-kw">${m}</span>`;
    if (TYPES.has(m)) return `<span class="tok-type">${m}</span>`;
    return m;
  });
  return out;
}

function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <div className="block-code">
      <div className="code-header">
        <span>{lang || 'code'}</span>
        <button className="copy-btn" onClick={copy}>
          {copied ? t({ en: 'copied', vi: 'đã sao chép' }) : t({ en: 'copy', vi: 'sao chép' })}
        </button>
      </div>
      <pre dangerouslySetInnerHTML={{ __html: highlight(code) }} />
    </div>
  );
}

function Callout({ block }: { block: Extract<Block, { type: 'callout' }> }) {
  const { t } = useI18n();
  const icons: Record<string, string> = {
    info: 'book',
    tip: 'check-circle',
    rule: 'alert',
    problem: 'alert',
  };
  return (
    <div className={`callout callout-${block.variant}`}>
      {block.title && (
        <div className="callout-title">
          <Icon name={icons[block.variant]} size={15} />
          {t(block.title)}
        </div>
      )}
      <p>{t(block.text)}</p>
    </div>
  );
}

export function BlockRenderer({ block }: { block: Block }) {
  const { t, tArr } = useI18n();
  switch (block.type) {
    case 'p':
      return <p className="block-p">{t(block.text)}</p>;
    case 'h':
      return <h4 className="block-h">{t(block.text)}</h4>;
    case 'code':
      return <CodeBlock code={block.code} lang={block.lang} />;
    case 'img':
      return <img className="block-img" src={block.src} alt={block.alt ? t(block.alt) : ''} loading="lazy" />;
    case 'ul':
      return (
        <ul className="block-ul">
          {tArr(block.items).map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="block-ol">
          {tArr(block.items).map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case 'callout':
      return <Callout block={block} />;
    case 'link':
      return (
        <p>
          <a href={block.href} target={block.external ? '_blank' : undefined} rel="noreferrer">
            {t(block.label)}
          </a>
        </p>
      );
    default:
      return null;
  }
}
