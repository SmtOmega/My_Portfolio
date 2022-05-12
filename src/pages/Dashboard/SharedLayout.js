import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import BigSideBar from '../../components/BigSidebar'
import NavBar from '../../components/NavBar'
import SmallSideBar from '../../components/SmallSidebar'


const SharedLayout = () => {
    return <Wrapper>
        <main className='dashboard'>
            <BigSideBar />
            <SmallSideBar />
            <div>
                <NavBar />
                <div className='dashboard-page'>
                    <Outlet />
                </div>
            </div>

        </main>
    </Wrapper>
}


const Wrapper = styled.section`
.dashboard{
    display: grid;
    grid-template-columns: 1fr;
}
.dashboard-page{
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
}
@media (min-width: 992px){
    .dashboard {
        grid-template-columns: auto 1fr;
    }
    .dashboard-page{
        width: 90%;
    }
}
`
export default SharedLayout