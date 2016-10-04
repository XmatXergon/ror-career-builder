import React from 'react';
import { browserHistory } from 'react-router';
import css from '../../css/components/ActionButtons.css';

const ActionButtons = (props) => {
  const clickReset = () => {
    props.resetCareer();
  };
  const createShareLink = () => {
    let saveLink = `${window.location.origin}/career/${props.careerSlug}/s?`;
    saveLink += `l=${props.currentLevel}`;
    saveLink += `&r=${props.currentRenown}`;
    saveLink += `&tl=${props.currentTacticLimit}`;
    saveLink += `&mp=${props.masteryPoints}`;
    saveLink += `&pA=${props.pathAMeter}`;
    saveLink += `&pB=${props.pathBMeter}`;
    saveLink += `&pC=${props.pathCMeter}`;
    saveLink += `&m1=${props.selectedMorale1}`;
    saveLink += `&m2=${props.selectedMorale2}`;
    saveLink += `&m3=${props.selectedMorale3}`;
    saveLink += `&m4=${props.selectedMorale4}`;
    saveLink += `&ma=${props.selectedMasteries}`;
    saveLink += `&t=${props.selectedTactics}`;
    return saveLink;
  };
  const createBBCode = (link) =>
    `[url=${link}]RoR.builders - ${props.career.name}[/url]`;
  const buildModalTitle = () => {
    const url = `/images/icons/${props.careerSlug}.png`;
    return (
      <div className="row row--v-center">
        <img src={url} className={css.modalTitleIcon} />
        <h2 className={css.modalTitle}>
          Share this {props.career.name} build
        </h2>
      </div>
    );
  };
  const buildModalBody = () =>
    <div>
      <p className={css.modalCopy}>To share this build simply copy the link below:</p>
      <div className={css.modalSelectable} contentEditable>{createShareLink()}</div>
      <p className={css.modalCopy}>Alternatively, here is some BBCode to copy and paste into a forum post:</p>
      <div className={css.modalSelectable} contentEditable>{createBBCode(createShareLink())}</div>
    </div>;
  const clickShare = () => {
    props.updateModalContent(buildModalTitle(), buildModalBody());
    props.updateOverlayVisibility(true);
    props.updateModalVisibility(true);
    props.gaCareerShared();
  };
  const clickChangeCareer = () => {
    props.updateOverlayVisibility(true);
    props.updateSidebarVisibility(true);
    props.gaChangeCareer('ActionButton');
  };
  const clickHome = () => {
    browserHistory.push('/');
  };
  return (
    <div className={css.container}>
      <button className={css.home} type="button" onClick={clickHome}>
        Home
      </button>
      <button className={css.share} type="button" onClick={clickShare}>
        Share<span className="hidden@mobile"> career</span>
      </button>
      <button className={css.change} type="button" onClick={clickChangeCareer}>
        Change<span className="hidden@mobile"> career</span>
      </button>
      <button className={css.reset} type="button" onClick={clickReset}>
        Reset
      </button>
    </div>
  );
};

ActionButtons.propTypes = {
  resetCareer: React.PropTypes.func,
  careerSlug: React.PropTypes.string,
  currentLevel: React.PropTypes.number,
  currentRenown: React.PropTypes.number,
  currentTacticLimit: React.PropTypes.number,
  masteryPoints: React.PropTypes.number,
  pathAMeter: React.PropTypes.number,
  pathBMeter: React.PropTypes.number,
  pathCMeter: React.PropTypes.number,
  selectedMorale1: React.PropTypes.number,
  selectedMorale2: React.PropTypes.number,
  selectedMorale3: React.PropTypes.number,
  selectedMorale4: React.PropTypes.number,
  selectedMasteries: React.PropTypes.array,
  selectedTactics: React.PropTypes.array,
  career: React.PropTypes.object,
  updateModalContent: React.PropTypes.func,
  updateOverlayVisibility: React.PropTypes.func,
  updateModalVisibility: React.PropTypes.func,
  updateSidebarVisibility: React.PropTypes.func,
  gaChangeCareer: React.PropTypes.func,
  gaCareerShared: React.PropTypes.func,
};

export default ActionButtons;
