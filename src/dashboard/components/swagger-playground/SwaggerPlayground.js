import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import { useState } from 'react';
import { useEffect } from 'react';
import ctx from '../../../shared/services/ContextService';

const SwaggerPlayground = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    ctx.selectedFile$.subscribe((f) => setFile(f));
  }, []);

  return (
    <div>
      <SwaggerUI url={file && file.name} />;
    </div>
  );
};

export default SwaggerPlayground;
