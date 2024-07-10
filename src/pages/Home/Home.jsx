import { useState } from "react";
import { Modal } from "../../components/Modal";
import { Banner } from "./components/Banner";
import { Courses } from "./components/Courses";
import { EditCourse } from "./components/EditCourse";

export const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section>
      <Banner />
      <Courses openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditCourse />
      </Modal>
    </section>
  );
};
