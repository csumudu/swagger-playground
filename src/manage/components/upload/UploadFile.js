import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ApiEndpoints } from '../../../api/endpoints';
import ContextService from '../../../shared/services/ContextService';

const UploadFile = () => {
  const props = {
    name: 'file',
    accept: 'application/json',
    action: ApiEndpoints.swagger.upload,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        ContextService.loadFiles();
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    beforeUpload(file) {
      console.log(file.type);
      const isJson = file.type === 'application/json';
      if (!isJson) {
        message.error('You can only upload swagger json files!');
      }

      return isJson;
    },
  };
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload Swagger File</Button>
    </Upload>
  );
};

export default UploadFile;
