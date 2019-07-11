import React from 'react'
import { Form, Input, Select, Switch } from 'antd';
import { createFormField } from 'rc-form';

function DeployForm() {
  return (
    <div>

    </div>
  )
}

const WrappedDeployForm = Form.create({
  mapPropsToFields(props) {
    return {
      enabled: true,
      registry: {

      }
    };
  },
})(DeployForm);

export default WrappedDeployForm;
