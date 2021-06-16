import React from 'react'
import {Dropdown,Image,Menu} from 'semantic-ui-react'
export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://kurious.ku.edu.tr/wp-content/uploads/2019/01/mona_lisa_by_leonardo_da_vinci_from_c2rmf_retouched_1.jpg" />
                <Dropdown pointing="top left" text="Kubilay">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
