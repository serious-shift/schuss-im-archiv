import React from 'react';

type ContentBlockProps = {
  speaker?: string;
  children: React.ReactNode;
  image?: string;
};

export default function ContentBlock({ speaker, children, image }: ContentBlockProps) {
    const style = image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined;

  return (
    <div className="content-block w-full" style={style}>
      {speaker && (
        <div className="content-block-speaker">
          {speaker}
        </div>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}