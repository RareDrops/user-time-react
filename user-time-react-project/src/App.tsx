import Frame from './components/Frame'
import Section from './components/Section'
import TimerContent from './components/TimerContent'
import CenteredContentDiv from './components/CenteredContentDiv'
import './App.css'

function App() {
  return (
    <>
      <Section>
        <Frame>
          <CenteredContentDiv style={{marginRight: "10%"}}>
            <TimerContent></TimerContent>
          </CenteredContentDiv>
        </Frame>
      </Section>
    </>
  )
}

export default App
