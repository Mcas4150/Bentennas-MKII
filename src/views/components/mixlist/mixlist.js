import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchMixes, invalidateMixcloud} from "../../../core/actions"
// import { fetchMixes, mixesActions } from '../../../core/mixes/index.js'
import { connect, bindActionCreators } from 'react-redux'
import classNames from 'classnames'
import MixCard from '../mix-card'
import LoadingIndicator from '../loading-indicator/loading-indicator';
import "./mixlist.css"
 
 class Mixlist extends Component {
    static propTypes = {
        Mixcloud: PropTypes.string.isRequired,
        mixes: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { dispatch, Mixcloud } = this.props
        dispatch(fetchMixes(Mixcloud))
      }
      
    render() {

       const mixlistClassName = classNames('mixlist')
       const mixcardClassName = classNames('mixcard')

        return (
        <div className={mixlistClassName}>
            {this.props.mixes.map((mix, i) => 
                <div key={i} className={mixcardClassName}>
                    <a href={mix.url}>
                        <div className='mixcard__image--border'> 
                            <img class="mixcard__image--url" src={mix.pictures.large}/>   
                        </div>
                        <div className="mixcard__name">
                            <div>{mix.name}</div>
                           
                        </div>
                    </a>
                </div>
            )}
        </div>
        )
   }
}

function mapStateToProps(state) {
    const { Mixcloud, mixesReducer } = state
    const { items: mixes } = mixesReducer[Mixcloud] || { items: [] }

    return {
      Mixcloud,
      mixes
    }
  }
   

//   function mapDispatchToProps(dispatch) {
//     //   return {
//     //     onPlay: bindActionCreators(actions.playMix, dispatch),
//     //   };
//   }

  export default connect(
    mapStateToProps
    )(Mixlist)


