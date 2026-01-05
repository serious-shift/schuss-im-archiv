import React from 'react';

type ContentBlockProps = {
  speaker?: string;
  children: React.ReactNode;
};

export default function ContentBlock({ speaker, children }: ContentBlockProps) {
  return (
    <div className="content-block w-full">
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