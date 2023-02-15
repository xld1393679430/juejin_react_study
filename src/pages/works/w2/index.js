import { Collapse } from "antd";
import DragAndDrop from './DragAndDrop'
import Code from '@/components/Code'

const { Panel } = Collapse;


const Index = () => {
	const code = `
		import { useReducer } from 'react';
		import './index.css'
		
		const reducer = (state, action) => {
		switch (action.type) {
			case 'SET_DROP_DEPTH':
			return { ...state, dropDepth: action.dropDepth }
			case 'SET_IN_DROP_ZONE':
			return { ...state, inDropZone: action.inDropZone };
			case 'ADD_FILE_TO_LIST':
			return { ...state, fileList: state.fileList.concat(action.files) };
			default:
			return state;
		}
		};
		
		const DragAndDrop = props => {
		
		const { data, dispatch } = props;
		
		const handleDragEnter = e => {
			e.preventDefault();
			e.stopPropagation();
		
			dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth + 1 });
		};
		
		const handleDragLeave = e => {
			e.preventDefault();
			e.stopPropagation();
		
			dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth - 1 });
			if (data.dropDepth > 0) return
			dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
		};
		
		const handleDragOver = e => {
			e.preventDefault();
			e.stopPropagation();
		
			e.dataTransfer.dropEffect = 'copy';
			dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true });
		};
		
		const handleDrop = e => {
			e.preventDefault();
			e.stopPropagation();
		
			let files = [...e.dataTransfer.files];
		
			if (files && files.length > 0) {
			const existingFiles = data.fileList.map(f => f.name)
			files = files.filter(f => !existingFiles.includes(f.name))
		
			dispatch({ type: 'ADD_FILE_TO_LIST', files });
			dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
			dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
			}
		};
		
		return (
			<div 
				className={data.inDropZone ? 'drag-drop-zone inside-drag-area' : 'drag-drop-zone'}
				onDrop={e => handleDrop(e)}
				onDragOver={e => handleDragOver(e)}
				onDragEnter={e => handleDragEnter(e)}
				onDragLeave={e => handleDragLeave(e)}
			>
			<p>Drag files here to upload</p>
			</div>
		);
		};
		
		const Test = () => {
		
		const [data, dispatch] = useReducer(
			reducer, { dropDepth: 0, inDropZone: false, fileList: [] }
		)
		
		return (
			<>
			<DragAndDrop data={data} dispatch={dispatch} />
		
			<ol className="dropped-files">
				{data.fileList.map(f => {
				return (
					<li key={f.name}>{f.name}</li>
				)
				})}
			</ol>
			</>
		)
		}
		
		export default Test;
	`

	return (
		<div>
			<DragAndDrop />

			<Collapse destroyInactivePanel={true} style={{ width: "100%" }}>
				<Panel header={'Code'}>
					<Code tab>{code}</Code>
				</Panel>
			</Collapse>

		</div>
	)
}

export default Index