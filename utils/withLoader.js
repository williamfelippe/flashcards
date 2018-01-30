import React, { Component } from 'react'
import { Loader } from '../components'

const withLoader = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                loading: false
            }
        }

        setIsLoading(loading, callback) {
            this.setState({ loading }, () => callback())
        }

        render() {
            const { loading } = this.state

            return (
                (loading)
                    ? <Loader />
                    : <WrappedComponent
                        {...this.props}
                        isLoading={loading}
                        setIsLoading={
                            (loading, callback) => this.setIsLoading(loading, callback)
                        } />
            )
        }
    }
}

export default withLoader