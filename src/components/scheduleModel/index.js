import React from 'react';
import { Modal, Input, Form, DatePicker, Radio, Checkbox, Button,TimePicker } from 'antd';
import { useState,forwardRef, useImperativeHandle, } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import SearchIcon from '@mui/icons-material/Search';
const ScheduleModel = forwardRef(({},ref)=> {
  const [currenValue, setCurrentValue] = useState(1);
  const [open, setOpen] = useState(false);
  useImperativeHandle(ref, () => ({
    close: () => {
      setOpen(false);
    },
    changeOpen: () => {
      setOpen(true);
    }
}));
  const tabsList = [
      {
          label: 'Single occurrence',
          value: 1
      },
      {
          label: 'Reoccurring appointment',
          value: 2
      }
  ];
  
  return (
      <Modal
          width={'30%'}
          title={null}
          open={open}
          footer={null}
          // onOk={handleOk}
          onCancel={()=>setOpen(false)}
      >
          <div style={{ fontFamily: 'Silka', color: '#18357A', fontSize: '24px' }}>
              Schedule Appointmet
          </div>
          <div style={{ display: 'flex', marginTop: '16px' }}>
              {tabsList.map(res => (
                  <div
                      onClick={() => setCurrentValue(res.value)}
                      key={res.value}
                      style={{
                          padding: '10px 24px',
                          borderRadius: '10px',
                          backgroundColor: currenValue === res.value ? '#5955B3 ' : '#F8F9FE',
                          color: currenValue === res.value ? '#fff' : '#5B6680',
                          fontSize: '16px',
                          width: '230px'
                      }}>
                      {res.label}
                  </div>
              ))}
          </div>
          <div style={{ color: '#18357A', fontWeight: 'bold', margin: '16px 0' }}>
              Appointment title:
          </div>
          <Input placeholder='Dr.Williams 1x1 Consult'></Input>
          <div style={{ color: '#18357A', fontWeight: 'bold', margin: '16px 0' }}>
              Participant(s):
          </div>
          <Input
              prefix={<SearchOutlined className='site-form-item-icon' />}
              placeholder='Search participants...'
          />
          <div style={{ display: 'flex',justifyContent:'space-between' }}>
              <div style={{width:'49%'}}>
                  <div style={{ color: '#18357A', fontWeight: 'bold', margin: '16px 0' }}>
                      Date:
                  </div>
                  <DatePicker style={{width:'100%'}} showTime />
              </div>
              <div style={{width:'49%'}}>
                  <div style={{ color: '#18357A', fontWeight: 'bold', margin: '16px 0' }}>
                      Time:
                  </div>
                  <TimePicker style={{width:'100%'}}  />
              </div>
          </div>

          <div style={{ color: '#18357A', fontWeight: 'bold', margin: '16px 0' }}>Duration:</div>
          <Radio.Group
              // value={value}
              className=''>
              <Radio value={1}>15 mins</Radio>
              <Radio value={2}>30 mins</Radio>
              <Radio value={3}>45 mins</Radio>
              <Radio value={4}>60 mins</Radio>
          </Radio.Group>
          <div style={{ color: '#18357A', fontWeight: 'bold', margin: '16px 0' }}>
              Appointment description:
          </div>
          <Input.TextArea placeholder='l would like to schedule clinical consult to discuss our shared patients' />
          <div>
              <Checkbox style={{ margin: '16px 0' }}>
                  Notify me via different from main account email{' '}
                  <span style={{ color: '#18357A' }}> Enter email address</span>{' '}
              </Checkbox>
          </div>
          <div style={{ textAlign: 'center' }}>
              <Button style={{ width: '150px' }} onClick={()=>setOpen(false)}>Cancle</Button>
              <Button
                  type='primary'
                  style={{ width: '150px', marginLeft: '16px' }}>
                  Send an invite
              </Button>
          </div>
      </Modal>
  );
})
export default ScheduleModel;
