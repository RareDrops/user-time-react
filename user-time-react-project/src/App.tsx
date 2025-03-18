import Frame from './components/Frame'
import Section from './components/Section'

import CenteredContentDiv from './components/CenteredContentDiv'
import UserTimeZone from './components/UserTimeZone'
import UserTime from './components/UserTime'
import UserDate from './components/UserDate'

import './App.css'


function App() {
  return (
    <>
      <Section>
        <Frame>
          <CenteredContentDiv style={{marginRight: "10%"}}>
            <UserTimeZone />
            <UserTime />
            <UserDate />
          </CenteredContentDiv>
        </Frame>
      </Section>
    </>
  )
}

export default App
