import React from 'react'
import { UserContext, CityContext } from '../App'

function ComponentF() {
	return (
		<div>
			<UserContext.Consumer>
				{user => {
					return (
						<CityContext.Consumer>
							{channel => {
                return (
									<>
										<p>Component F, old-style Consumer:</p>
										User context value {user}, channel context value {channel}
									</>
								)
							}}
						</CityContext.Consumer>
					)
				}}
			</UserContext.Consumer>
		</div>
	)
}

export default ComponentF
