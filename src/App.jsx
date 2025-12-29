import { useState } from "react";
import { Button, Form, Input, Layout, Modal } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import TextArea from "antd/es/input/TextArea";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const cancleModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ color: "#fff", padding: "0 20px" }}>Header</Header>
        <Layout>
          <Content style={{ padding: "20px" }}>
            <Button type="primary" onClick={showModal}>
              Add Task
            </Button>
            <Modal
              title="Add Task"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={cancleModal}
            >
              <Form>
                <Form.Item label="Name" name="name">
                  <Input/>
                </Form.Item>
                <Form.Item label="Task" name="task">
                  <TextArea rows={20}/>
                </Form.Item>
              </Form>
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
