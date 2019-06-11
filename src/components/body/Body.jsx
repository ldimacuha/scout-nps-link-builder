import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import '../../assets/css/main.css';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipientCompanyName: '',
            recipientFirstName: '',
            recipientLastName: '',
            recipientEmail: '',
            staff: 'Scout Talent',
            serviceType: 'Implementation',
            clipboardStatus: '',
            question: ''
        }
        this.inputChange = this.inputChange.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
    }

    inputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            clipboardStatus: ''
        });
    }

    buildOptions(data) {
        let elem = [];
        data = data.sort();
        data.forEach((name, i) => {
            elem.push(<option value={name} key={i}>{name}</option>);
        });
        return elem;
    }

    buildLink(question) {
        let { recipientCompanyName, recipientFirstName, recipientLastName, recipientEmail, serviceType, staff } = this.state;
        const path = 'https://scouttalenthq.com/nps-survey';
        const params = '?Service-Type=' + serviceType + '&Name=' + staff + '&Company-Name=' + recipientCompanyName + '&Client-First-Name=' + recipientFirstName + '&Client-Last-Name=' + recipientLastName + '&Client-Email=' + recipientEmail + '&NPS-Question=' + question;
        const npsUrl = path + params;
        return npsUrl;
    }

    buildQuestion(serviceType, staff) {
        let question;

        switch (serviceType) {
            case 'Support':
                question = 'How likely are you to recommend ' + staff + ' to a friend or colleague?';
                break;
            case 'Implementation':
                question = 'How likely are you to recommend ' + staff + ', your Implementation Lead to a friend or colleague?';
                break;
            case 'Training':
                question = 'How likely are you to recommend ' + staff + ', your Training Lead to a friend or colleague?';
                break;
            default:
                question = 'How likely are you to recommend ' + staff + ' to a friend or colleague?';
        }

        return question;
    }

    handlePreview(link) {
        window.open(link, '_blank');
    }

    render() {
        let { staff, serviceType, clipboardStatus } = this.state;
        const { staffList, serviceTypeList } = this.props;
        let staffOptions = this.buildOptions(staffList);
        let serviceTypeOptions = this.buildOptions(serviceTypeList);
        let question = this.buildQuestion(serviceType, staff);
        let link = this.buildLink(question);

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm">
                        <div className="row pt-3">
                            <div className="col-sm mb-2">
                                <div className="card">
                                    <div className="card-header">
                                        Recipient Details
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="recipientCompanyNameInput">Company name</label>
                                            <input type="text" className="form-control" name="recipientCompanyName" id="recipientCompanyNameInput" onChange={this.inputChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipientFirstNameInput">First name</label>
                                            <input type="text" className="form-control" name="recipientFirstName" id="recipientFirstNameInput" onChange={this.inputChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipientLastNameInput">Last name</label>
                                            <input type="text" className="form-control" name="recipientLastName" id="recipientLastNameInput" onChange={this.inputChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipientEmailInput">Email address</label>
                                            <input type="email" className="form-control" name="recipientEmail" id="recipientEmailInput" onChange={this.inputChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm mb-2">
                                <div className="card">
                                    <div className="card-header">
                                        NPS Settings
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="serviceTypeSelect">Service Type</label>
                                            <select name="serviceType" id="serviceTypeSelect" className="form-control" value={this.state.serviceType} onChange={this.inputChange}>
                                                {serviceTypeOptions}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="staffSelect">Staff</label>
                                            <select name="staff" id="staffSelect" className="form-control" value={this.state.staff} onChange={this.inputChange}>
                                                <option value="Scout Talent"></option>
                                                {staffOptions}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card-footer text-muted">
                                        {question}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm mb-2">
                        <div className="card">
                            <div className="card-header">
                                NPS Link
                            </div>
                            <div className="card-body">
                                <div className="card bg-light mb-3">
                                    <div className="card-text p-2">
                                        <code>{link}</code>
                                    </div>
                                </div>

                                <button className="btn filled-teal mr-2" onClick={() => this.handlePreview(link)}>Preview</button>

                                <CopyToClipboard text={link}
                                    onCopy={() => this.setState({ clipboardStatus: 'copied' })}>
                                    <button className="btn filled-teal">Copy to Clipboard</button>
                                </CopyToClipboard> {clipboardStatus}


                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Body;