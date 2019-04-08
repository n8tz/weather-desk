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

import {WIDGET_CHANGED, WIDGET_NEW, WIDGET_RM, SELECTED_WIDGET_CHANGED} from '../actions/updateWidget';


/**
 * Should use id hashmap
 * @param state
 * @param action
 * @returns {*}
 */
export function widgets( state = { right: false }, action ) {
	switch ( action.type ) {
		case SELECTED_WIDGET_CHANGED:
			return {
				...state,
				selectedWidgetId: action.wid
			};
		case WIDGET_CHANGED:
			return {
				...state,
				items: state.items
				            .map(
					            it => (it._id === action.record._id)
					                  ? action.record
					                  : it
				            )
			}
		case WIDGET_NEW:
			return {
				...state,
				items: [...state.items, action.record]
			}
		case WIDGET_RM:
			return {
				...state,
				items: state.items.filter(
					it => (it._id !== action.wid)
				)
			}
		default:
			return state
	}
}
