import React from 'react';
import PropTypes from 'prop-types'
import './index.css'
import moment from 'moment';


const FileList = () => (
    <table className="filelist">
    <tbody>
    {files.map(file => (
        <FileListItem key={file.id} file={file}/>
    ))}
    </tbody>
    </table>
);

FileList.propTypes = {
    files: PropTypes.array
};

function FileIcon({ file }) {
    let icon = 'fa-file-text-o';
    if(file.type === 'folder') {
        icon = 'fa-folder';
    }
    return (
        <td className="file-icon">
            <i className={`fa ${icon}`}/>
        </td>
    );
}

FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

function getFileName(file) {
    return [
        <FileIcon file={file} key={0}/>,
        <td className="file-name" key={1}>{file.name}</td>
    ];
}

const FileListItem = ({ file }) => (
    <tr className="filelist-item">
        {getFileName(file)}
        <CommitMessage  commit={file.latestCommit} />
        <td className='age'>
            <Time time={file.updated_at}/>
        </td>
    </tr>
);

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

const CommitMessage = ({ commit }) => (
    <td className="commitmessage">
        {commit.message}
    </td>
);
CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
};

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    );
};

Time.propTypes = {
    time: PropTypes.string.isRequired
};

const files = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },

    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },

    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },

    {
        id: 4,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },

    {
        id: 5,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },

    {
        id: 6,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },

    {
        id: 7,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },

    {
        id: 8,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },

    {
        id: 9,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },

    {
        id: 10,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },

    {
        id: 11,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },

    {
        id: 12,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },
];

export default FileList;