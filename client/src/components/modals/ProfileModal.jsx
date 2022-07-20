import { Modal, useMantineTheme } from '@mantine/core';
import './ProfileModal.scss'

const ProfileModal = ({modalOpened, setModalOpened}) => {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='50%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
           <div className="profile-container">
           <form className="form-info form-auth">
                <h3>Your Info</h3>
                <div className="content">
                   <div className="flow">
                    <input 
                            type="text" 
                            placeholder="First Name" 
                            name="FirstName"
                            className="form-input" 
                        />
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            name="LastName" 
                            className="form-input"
                        />
                   </div>

                    <div className="flow" style={{ marginTop:'10px', marginBottom: '10px' }}>
                        <input 
                            type="text" 
                            placeholder="Works at" 
                            name="worksAt" 
                            className="form-input"

                        />
                    </div>
                    <div className="flow">
                        <input 
                            type="text" 
                            placeholder="Lives In" 
                            name="livesIn"
                            className="form-input" 
                        />
                        <input 
                            type="text" 
                            placeholder="Country" 
                            name="country" 
                            className="form-input"
                        />
                    </div>
                    <div className="flow" style={{ marginTop:'10px', marginBottom: '10px' }}>
                        <input 
                            type="text" 
                            placeholder="Relationship Status" 
                            name="relationship" 
                            className="form-input"

                        />
                    </div>
                    <div className="flow">
                        Profile Image
                        <input 
                            type="file" 
                            name="profileImg"
                        />
                        Cover Image
                        <input 
                            type="file" 
                            name="coverImg" 
                           
                        />
                    </div>
                   
                    <button style={{ marginTop: '15px' }} className="button" type="submit">Sign Up</button>
                </div>
            </form>
           </div>
        </Modal>
    );
}

export default ProfileModal