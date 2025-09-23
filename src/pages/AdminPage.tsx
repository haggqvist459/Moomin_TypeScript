import { useState } from "react";
import { deleteData, exportLocalStorageToFile, importLocalStorageFromFile, LOCALSTORAGE_KEYS } from '@/utils'
import { Header, Modal } from "@/components";


const AdminPage = () => {


  const [showModal, setShowModal] = useState(false);

  const handleInputButtonClick = (inputId: string): void => {
    const input = document.getElementById(inputId);
    if (input) input.click();
  };

  const handleExports = (): void => {
    exportLocalStorageToFile(Object.values(LOCALSTORAGE_KEYS), 'Moomin_Mugs.txt')
  }

  const confirmDelete = (): void => {
    deleteData()
    // setShowModal(false);
    window.location.reload();
  };


  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h1 className="section-header mt-5">Data Management</h1>
      <div className='flex flex-col md:flex-row space-x-5 justify-center text-center mt-5'>
        {/* Export */}
        <div className='w-11/12 md:w-1/3 flex flex-col items-center justify-center mx-auto mb-5 pb-3'>
          <Header title="Export data" />
          <p className='flex-grow'>To transfer all the data from one device to another, export it into a .txt file first. </p>
          <button
            type="button"
            className="w-1/2 mt-4 border-2 border-primary bg-primary rounded text-primary-text font-medium hover:border-primary-text"
            onClick={() => handleExports()}
          >
            Export
          </button>
        </div>
        {/* Import */}
        <div className='w-11/12 md:w-1/3 flex flex-col items-center justify-center mx-auto mb-5 pb-3'>
          <Header title="Import data" />
          <p className='flex-grow'>If you have a .txt file exported from this page, from another device, import it here.</p>
          <input
            id='inputButton'
            type='file'
            accept='.txt'
            style={{ display: 'none' }}
            onChange={(e) => importLocalStorageFromFile(e)}
          />
          <button
            type="button"
            id='inputButton'
            className="w-1/2 mt-4 border-2 border-primary bg-primary rounded text-primary-text font-medium hover:border-primary-text"
            onClick={() => handleInputButtonClick('inputButton')}
          >
            Import
          </button>
        </div>
      </div>
      {/* Delete stuff */}
      <div className='w-11/12 md:w-1/3 mx-auto text-center'>
        <div className='flex flex-col items-center mb-5 pb-3'>
          <Header title="Delete data" headerType="sub-header" />
          <p>Delete all locally saved data.</p>
          <button
            type="button"
            className="w-1/2 mt-4 border-2 border-primary bg-primary rounded text-primary-text font-medium hover:border-primary-text"
            onClick={() => setShowModal(true)}
          >
            Delete
          </button>
        </div>
      </div>
      <Modal
        title="Delete data"
        description="Clear out all data stored locally? This action can not be undone."
        isOpen={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={() => confirmDelete()}
      />
    </section>
  );
}

export default AdminPage;