import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Show' onClick = {onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title:'defalurs',
}

Header.propTypes = {
    title:PropTypes.string.isRequired,
}
/* You can do this
const headingstyle = {
    color:'red',
     backgroundColor:'black'
}
*/

export default Header
