import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import styles from "./page.module.css"
const PostModal = ({modal2Open,setModal2Open}) => {
    const [input,setInput]=useState("")
    const addStatus=()=>{}
    
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={[
            
            <Button onClick={addStatus} disabled={!input} key="submit" type="primary" >
             Post
            </Button>,
          ]}
      >
        <textarea rows={25} cols={25} className={styles.modalInput} value={input} onChange={(e)=>setInput(e.target.value)}  placeholder="What's on your mind" />
      </Modal>
    </>
  );
};
export default PostModal;