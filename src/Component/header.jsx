
const header = ({selectedTeam,selectedTeamCount}) => {
  return (
    <header>
      <h1>Team Member Allocation</h1>
      <h3>{selectedTeam} has {selectedTeamCount} members</h3>
    </header>
  )
}

export default header
