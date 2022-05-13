import { FunctionComponent } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock: FunctionComponent<{
  code: string;
  language: string;
  dark?: boolean;
  maxHeight?: string;
}> = function ({ code, language, dark, maxHeight }) {
  const optionalProps: { style?: any } = {};

  if (dark) {
    optionalProps.style = vscDarkPlus;
  }

  return (
    <div className='code-block'>
      <div
        className={`code-block-copy btn btn-xs ${
          dark ? 'btn-light-soft' : 'btn-secondary-soft'
        }`}
        style={{ right: maxHeight ? '15px' : 0 }}
        onClick={(event) => {
          navigator.clipboard
            .writeText(code)
            .then(() => {
              (event.target as HTMLDivElement).textContent = 'Copied!';

              setTimeout(() => {
                (event.target as HTMLDivElement).textContent = 'Copy';
              }, 5000);
            })
            .catch(() => {});
        }}
      >
        Copy
      </div>

      <SyntaxHighlighter
        wrapLongLines
        language={language}
        PreTag='div'
        className='code'
        customStyle={{ maxHeight }}
        {...optionalProps}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
