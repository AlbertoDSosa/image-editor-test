import React, { useEffect, useState, useRef, RefObject } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import './styles.module.css';

import { IOptions } from 'definitions/tui-image-editor';
import ImageEditor from 'tui-image-editor';

const ToastUIEditor: React.FC<IOptions> = (props) => {
  const rootEl = useRef<Element | null>(null);
  const [imageEditor, setImageEditor] = useState<ImageEditor | null>(null);

  useEffect(() => {
    if (!imageEditor && rootEl) {
      setImageEditor((prevState: any) => {
        console.log('first');
        console.log(prevState);
        const tuiImageEditor = new ImageEditor(rootEl.current as Element, {
          ...props
        });
        return tuiImageEditor;
      });
    }
    if (imageEditor) {
      setImageEditor((prevState: any) => {
        return imageEditor;
      });
    }
    return () => {
      imageEditor?.destroy();
      setImageEditor(null);
    };
  }, [rootEl, imageEditor]);

  return <div ref={rootEl as RefObject<HTMLDivElement>}></div>;
};

export default ToastUIEditor;
