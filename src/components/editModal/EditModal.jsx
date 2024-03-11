import './EditModal.style.scss'

import ReactModal from 'react-modal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import auth_service, { updateProfile } from '../../Redux/services/apiServices'

ReactModal.setAppElement('#root')

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

export const EditModal = ({ firstName, lastName }) => {
    const userName = useSelector((state) => state.user.userName)
    const token = useSelector((state) => state.login.token)
    const [newUserName, setNewUserName] = useState(userName)
    const [ApiAnswer, setAnswer] = useState('')
    const dispatch = useDispatch()

    let subtitle
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setAnswer('')
        setIsOpen(false)
    }
    const submit = (e) => {
        e.preventDefault()
        setAnswer('chargement...')
        setTimeout(() => {
            dispatch(auth_service.updateProfile(newUserName, token)).then(
                (response) => {
                    if (response.status == '200') {
                        setAnswer('Username successuffly updated')
                        setTimeout(() => {
                            closeModal()
                        }, 1000)
                    } else {
                        setAnswer('Something went wrong')
                    }
                }
            )
        }, 500)
    }

    return (
        <div>
            <button className="edit-button" onClick={openModal}>
                Edit Name
            </button>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="edit-inputs-buttons" onSubmit={submit}>
                    <h2>edit Username</h2>
                    <div className="edit-inputs">
                        <div className="input-group">
                            <label htmlFor="username">User name </label>
                            <input
                                className="edit-input"
                                id="username"
                                onChange={(e) => {
                                    setNewUserName(e.target.value)
                                }}
                                placeholder={userName}
                                value={newUserName}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="first name"> First name </label>
                            <input
                                type="text"
                                className="edit-input"
                                placeholder={firstName}
                                disabled
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="last name"> Last name </label>
                            <input
                                type="text"
                                className="edit-input"
                                placeholder={lastName}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="edit-buttons">
                        <button className="edit-button-option" type="submit">
                            Save
                        </button>
                        <button
                            type="button"
                            className="edit-button-option"
                            onClick={() => {
                                setNewUserName(userName)
                                closeModal()
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                    <p>{ApiAnswer}</p>
                </form>
            </ReactModal>
        </div>
    )
}

export default EditModal
