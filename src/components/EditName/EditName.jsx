import './EditName.scss'
import Logo from '../../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom'

function EditName() {
    return (
        <div className="a">
            <div className="test">Edit Name</div>
            <Link className="test" to={'/user'}>
                Return
            </Link>
        </div>
    )
}

export default EditName
