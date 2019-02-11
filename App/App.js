/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

import React                                from 'react';
import {connect}                            from 'react-redux'
import shortid                              from "shortid";
import {selectWidget, saveState, newWidget} from "./store/actions/updateWidget";
import Widget                               from './ui/containers/Widget.js';
import WeatherBlock                         from './ui/containers/WeatherBlock';

import "./ui/styles/index.scss"

export default connect(( { widgets, playlists } ) => ({ widgets, playlists }))(
	class App extends React.Component {
		state = {
			createDialog: false
		};
		
		render() {
			let { widgets = { items: [] }, dispatch } = this.props,
			    { createDialog = false }              = this.state;
			return <div>
				<h1>play with redux</h1>
				<div className={ "desk" }>
					{
						widgets.items.map(
							widget => <Widget key={ widget._id } record={ widget }
							                  onSelect={ e => dispatch(selectWidget(widget._id)) }
							                  selected={ widget._id == widgets.selectedWidgetId }>
								<WeatherBlock record={ widget }/>
							</Widget>
						)
					}
				</div>
				<div
					className={ "newBtn button" }
					onClick={ () => dispatch(newWidget()) }>
					newWidget
				</div>
				<div
					className={ "saveBtn button" }
					onClick={ e => dispatch(saveState()) }>
					Save state
				</div>
			</div>
		}
	}
)
