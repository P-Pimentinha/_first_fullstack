import './NavBar.css';

const NavBar =  () => {
    return (
        <ul class='nav__ul'>
            <li class="menu" id="logo">Workout-Tracker</li>
            <ul class="navSelectors">
                <li class="navSelector home" id="home">Home</li>
                <li class="navSelector calander" id="calander">Calender</li>
                <li class="navSelector progress" id="progress">Progress</li>
                <li class="navSelector myworkouts" id="myworkouts">MyWorkouts</li>
            </ul>
            <li class="menu" id="profileImg">profile_img</li>
        </ul>
    );
}

export default NavBar;