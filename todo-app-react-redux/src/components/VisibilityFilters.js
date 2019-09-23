import React from "react"
import { connect } from "react-redux"
import styled, {css} from 'styled-components'
import { setFilter } from "../redux/actions"
import { VISIBILITY_FILTERS } from "../constants"

const filterMixin  = css`
  padding: 0.3rem 0;
  margin: 0 0.3rem;
  cursor: pointer;
`

const VisibilityFilterSpan = styled.span`
${props => (props.is_filter ? filterMixin : 'color: blue;')}
`

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div>
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        return (
          <VisibilityFilterSpan
              key={`visibility-filter-${currentFilter}`}
              is_filter={currentFilter === activeFilter}
              onClick={() => {setFilter(currentFilter)}}>
            {currentFilter}
          </VisibilityFilterSpan>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter }
}
// export default VisibilityFilters
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters)
