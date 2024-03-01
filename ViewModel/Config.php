<?php
declare(strict_types=1);

namespace Zvirko\AnimationTitleTab\ViewModel;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\View\Element\Block\ArgumentInterface;

/**
 * Class Config
 * @package Zvirko\AnimateTitleTab\ViewModel
 */
 class Config implements ArgumentInterface
{
    const PATH_CONFIG_ENABLE = 'animationTitleTab/general/enabled';

    const PATH_CONFIG_ANIMATION_TITLE_TAB_TEXT = 'animationTitleTab/general/animationTitleTab';

    const PATH_CONFIG_VALUE_FROM_ADMIN = 'animationTitleTab/general/getValueFromAdmin';

    const PATH_CONFIG_ANIMATION_DURATION = 'animationTitleTab/general/duration';

     /**
      * @var ScopeConfigInterface
      */
    public ScopeConfigInterface $scopeConfig;

    public function __construct(
        ScopeConfigInterface $scopeConfig
    ) {
        $this->scopeConfig = $scopeConfig;
    }

     /**
      * @return mixed
      */
    public function ifEnable(): mixed
    {
        return $this->scopeConfig->getValue(self::PATH_CONFIG_ENABLE);
    }

     /**
      * @return mixed
      */
    public function getAnimationTitleTabText(): mixed
    {
        return $this->scopeConfig->getValue(self::PATH_CONFIG_ANIMATION_TITLE_TAB_TEXT);
    }

     /**
      * @return mixed
      */
     public function getValueFromAdmin(): mixed
     {
         return $this->scopeConfig->getValue(self::PATH_CONFIG_VALUE_FROM_ADMIN);
     }

     /**
      * @return mixed
      */
     public function getAnimationDuration(): mixed
     {
         return $this->scopeConfig->getValue(self::PATH_CONFIG_ANIMATION_DURATION);
     }
}
