import { useState } from "react";
import { Button, Form, Input, Layout, message, Modal, List } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import TextArea from "antd/es/input/TextArea";

function App() {
  const [form] = Form.useForm();
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const newTask = { id: Date.now(), ...values };
        setTasks((prev) => [...prev, newTask]);
        setIsModalOpen(false);
        form.resetFields();
      })
      .catch(() => {});
  };
  const cancleModal = () => {
    setIsModalOpen(false);
  };

  const removeTask = (id) => {
    const newTaskList = tasks.filter((task) => task.id !== id);
    setTasks(newTaskList);
  };
  return (
    <main>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ color: "#fff", padding: "0 20px" }}>To Do App</Header>
        <Layout>
          <Content style={{ padding: "20px" }}>
            <Button type="primary" onClick={showModal}>
              Add Task
            </Button>
            <List
              dataSource={tasks}
              locale={{ emptyText: "No tasks yet" }}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <strong>{item.name}</strong> {item.task}{" "}
                  <Button
                    onClick={() => {
                      removeTask(item.id);
                    }}
                  >
                    Remove
                  </Button>
                </List.Item>
              )}
            ></List>
            <Modal
              title="Add Task"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={cancleModal}
            >
              <Form form={form}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Input your name." }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="Task" name="task">
                  <TextArea rows={20} />
                </Form.Item>
              </Form>
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </main>
  );
}

export default App;
